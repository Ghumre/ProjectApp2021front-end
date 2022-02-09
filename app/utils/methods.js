export const isValidObjectField=(obj)=>{
   return Object.values(obj).every(value=> value.trim());
};

export const updateError=(error,stateUpdater)=>{
    stateUpdater(error);
    setTimeout(()=>{
       stateUpdater('');
    }, 25000);
};

export const isValidEmail=(value)=>{
    const regx=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
};


// const isValidForm=()=>{
//     if(!isValidObjectField(userInfo)) return updateError('Required All Fields!',setError);
     
//     if(!FirstName.trim() || FirstName.length<3) return updateError('Invalid name', setError);

//     if(!LastName.trim() || LastName.length<3) return updateError('Invalid LastName', setError);

//     if(!isValidEmail(EmailId)) return updateError('Invalid Email', setError);

//     if(!PhoneNo.trim()|| PhoneNo.length<10) return updateError('Invalid Phone Number', setError);

//     if(!AdharCardNo.trim()|| AdharCardNo.length<12) return updateError('Invalid Adhar Number', setError);

//     if(!Password.trim()||Password.length<8) return updateError('Password  is less than 8 characters! ', setError);
      
//     return true; 

//    };

// const submitForm=()=>{
//    if(isValidForm()){
//        console.log(userInfo)
//    }
// };