import type { Action } from 'svelte/action';

// Définition des options pour le longpress
type LongPressOptions = {
    duration?: number;
    threshold?: number;
    feedback?: boolean | { class?: string; style?: string };
};

// Événements personnalisés pour le longpress
type LongPressEvents = {
    onlongpressstart?: (e: CustomEvent) => void;
    onlongpressprogress?: (e: CustomEvent<{ progress: number }>) => void;
    onlongpresscancel?: (e: CustomEvent) => void;
    onlongpress?: (e: CustomEvent) => void;
};

export const longpress: Action<HTMLElement, LongPressOptions, LongPressEvents> = (node, options = {}) => {
    let {
        duration = 1000,
        threshold = 50,
        feedback = true
    } = options;

    let startTime: number;
    let timer: number;
    let progressInterval: number;
    let isPressing = false;

    // Applique un retour visuel si nécessaire
    const applyFeedback = () => {
        if (feedback) {
            const style = typeof feedback === 'object' ? feedback.style : 'background: rgba(0,0,0,0.1);';
            const cls = typeof feedback === 'object' ? feedback.class : 'active-press';

            if (style) node.style.cssText += style;
            if (cls) node.classList.add(cls);
        }
    };

    // Supprime le retour visuel
    const removeFeedback = () => {
        if (feedback) {
            const cls = typeof feedback === 'object' ? feedback.class : 'active-press';
            if (cls) node.classList.remove(cls);
        }
    };

    // Démarrage du press long
    const startPress = () => {
        if (isPressing) return;

        isPressing = true;
        startTime = Date.now();
        applyFeedback();

        node.dispatchEvent(new CustomEvent('longpressstart'));

        timer = setTimeout(() => {
            completePress();
        }, duration) as unknown as number;

        progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            node.dispatchEvent(new CustomEvent('longpressprogress', {
                detail: { progress }
            }));
        }, threshold) as unknown as number;
    };

    const completePress = () => {
        cleanup();
        node.dispatchEvent(new CustomEvent('longpress'));
    };

    const cancelPress = () => {
        if (!isPressing) return;
        cleanup();
        node.dispatchEvent(new CustomEvent('longpresscancel'));
    };

    const cleanup = () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
        removeFeedback();
        isPressing = false;
    };

    // Ajout des écouteurs d’événements
    node.addEventListener('mousedown', startPress);
    node.addEventListener('touchstart', startPress);
    node.addEventListener('mouseup', cancelPress);
    node.addEventListener('mouseleave', cancelPress);
    node.addEventListener('touchend', cancelPress);
    node.addEventListener('touchcancel', cancelPress);

    return {
        update(newOptions) {
            options = newOptions;
            duration = newOptions.duration || 1000;
            threshold = newOptions.threshold || 50;
            feedback = newOptions.feedback !== undefined ? newOptions.feedback : true;
        },
        destroy() {
            cleanup();
            node.removeEventListener('mousedown', startPress);
            node.removeEventListener('touchstart', startPress);
            node.removeEventListener('mouseup', cancelPress);
            node.removeEventListener('mouseleave', cancelPress);
            node.removeEventListener('touchend', cancelPress);
            node.removeEventListener('touchcancel', cancelPress);
        }
    };
};
