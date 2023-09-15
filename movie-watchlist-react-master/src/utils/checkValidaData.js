export const checkValidData=(email,password)=>{

    const isEmailVaild=/^([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/.test(email);
    const isPasswordVaild=/^([A-Za-z]\w{7,14})$/.test(password);

    if(!isEmailVaild) return 'Email Id is not vaild'
    if(!isPasswordVaild) return 'Password is not Vaild';

    return null;
}