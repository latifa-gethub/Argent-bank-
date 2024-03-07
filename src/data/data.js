export async function postLogin(login) { 
     
  try{
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",      
    },
    body: JSON.stringify(login) 
  });
  if (response.ok) {
    console.log(response)
    const token =await response.json();
    return token;
  } else if (response.status === 400) {
    return 'Invalid Fields';
  } else if (response.status === 500) {
    return 'Internal Server Error';
  }
}catch{
return "error server"
}
}

export async function getUserProfil(token) {   
  try{
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json", 
      'Authorization': `Bearer ${token}`     
    }
   
  });
  if (response.ok) {
    const user =await response.json();
    return user;
  } else if (response.status === 400) {
    return 'Invalid Fields';
  } else if (response.status === 500) {
    return 'Internal Server Error';
  }
}catch{
return "error server"
}
}

export async function putUser(token,newData) {
  
  try{
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(newData)
  })
  if (response.ok) {
    const user =await response.json();
    console.log("new reponse user avec put",user)
    return user;
  } else if (response.status === 400) {
    return 'Invalid Fields';
  } else if (response.status === 500) {
    return 'Internal Server Error';
  }
}catch{
return "error server"
}
}

