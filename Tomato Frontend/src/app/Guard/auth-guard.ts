import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router); 
  const isLocalData=localStorage.getItem("userEmail");
  if(isLocalData==null){
    router.navigateByUrl("/auth");
    return false;
  }
  else{
    return true;
  }
  
};

//TO DO TBD
//delete nai hora