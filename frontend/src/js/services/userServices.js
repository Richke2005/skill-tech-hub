const Service = require('./service');

class UserService extends Service {
    constructor() {
        super('users'); // <- isso assume que o endpoint do backend é "/users"
    }

    async getUserByAuth(email) {
        const response = await fetch(`${this.url}/search?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    async getUserCurses(id) {
        const response = await fetch(`${this.url}/${id}/curses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    /*async postData(data) {
        try {
            const response = await fetch(`${this.url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'cors'
            });

            const responseData = await response.json();

            if (!response.ok) {
                return { success: false, ...responseData };
            }

            return { success: true, ...responseData };
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            return { success: false, message: 'Erro de conexão com o servidor.' };
        }
    }*/
   async postData(data) {
  try {
    const response = await fetch(`http://localhost:3001/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    return response.ok
      ? { success: true, ...result }
      : { success: false, ...result };

  } catch (error) {
    return { success: false, message: 'Erro de conexão com o servidor.' };
  }
}


}

module.exports = UserService;
/*const Service = require('./service');

class UserService extends Service{
    constructor(){
        super('users');
    }

    async getUserByAuth(email){
        const response = await fetch(`${this.url}/search?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }

    async getUserCurses(id){
        const response = await fetch(`${this.url}/${id}/curses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        return response.json();
    }
}

module.exports = UserService;*/