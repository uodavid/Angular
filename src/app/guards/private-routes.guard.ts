import { CanActivateFn } from '@angular/router';

export const privateRoutesGuard: CanActivateFn = (route, state) => {

  let role: string  = "";
  const token: any = localStorage.getItem('token');

  if(token){
    const parseToken = JSON.parse(token);
    role = parseToken.userData.role;
  }

  if(!token){
    return false;
  }

  if(role != 'Admin'){
    console.log("No tiene acceso");
    return false;
  }

  return true;
};
