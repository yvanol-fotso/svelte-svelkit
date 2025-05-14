<script lang="ts">
    let user: {
      profile: {
        name: string;
        skills: string[];
      }
    } = {
      profile: { name: 'Yvanol', skills: [] }
    };
  
    function addSkill() {
      user = {
        ...user,
        profile: {
          ...user.profile,
          skills: [...user.profile.skills, 'Svelte']
        }
      };
    }
  </script>
  
  <button on:click={addSkill}>Add Skill</button>
  <p>{user.profile.skills}</p>


<!-- Alternative plus propre avec une interface : -->
<!-- 
<script lang="ts">
    interface Profile {
      name: string;
      skills: string[];
    }
  
    interface User {
      profile: Profile;
    }
  
    let user: User = {
      profile: { name: 'Yvanol', skills: [] }
    };
  
    function addSkill() {
      user = {
        ...user,
        profile: {
          ...user.profile,
          skills: [...user.profile.skills, 'Svelte']
        }
      };
    }
  </script> -->