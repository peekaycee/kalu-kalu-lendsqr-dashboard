import './_Login.scss';
import Input from '../common/Input'

const LoginForm = () => {
  return (
    <main className='login__form-container'>
      <section className='welcome__text'>
        <h1>Welcome!</h1>
        <p>Enter details to login</p>
        <form action='' className='form'>
          <div className='input__values'>
            <Input className='email__input' type= 'email' value='' handleChange={(e) => console.log(e)} placeholder='Email' />
            <Input className='password__input' type='password' value='' handleChange={(e) => console.log(e)} placeholder='Password' /><span id='show__password'>SHOW</span>
          </div>
            <p>FORGOT PASSWORD?</p>
            <button type='button'>LOG IN</button>
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
