<template>
  <section class="contact">
    <h1 class="app_name">Contact</h1>
    <div class="contact_wrapper">
      <div class="contact_content">
        <h2 class="app_name">Ask me question!</h2>
        <p class="paragraph contact_paragraph">E-mail: email@email.com</p>
        <p class="paragraph contact_paragraph">Phone: 666-777-888</p>
        <p class="paragraph contact_paragraph">Adress: Gdańsk</p>
        <h2 class="app_name">See you!</h2>
      </div>
      <iframe className='contact_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74463.3682203033!2d18.558681765570636!3d54.321980400190036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!5e0!3m2!1spl!2spl!4v1662386341599!5m2!1spl!2spl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>
<style lang="scss">
  .contact{
    &_wrapper{
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
        @media (min-width: 768px) {
          flex-direction: row;
        }
    }
    &_content{
      text-align: center;
      margin: 0 auto;
      width: 375px;
      padding: 15px;
    }
    &_paragraph{
      padding: 10px;
    }
    &_map {
        display: block;
        margin: 0 auto;
        border: none;
        width: 350px;
        height: 400px;
    }
  }
</style>