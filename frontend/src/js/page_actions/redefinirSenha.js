document.getElementById('changePasswordButton').addEventListener('click', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    try {
        const response = await fetch('/skilltech/api/v1/users/change-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newPassword, confirmPassword }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.message || 'Erro ao alterar a senha.');
            return;
        }

        const data = await response.json();
        alert(data.message || 'Senha alterada com sucesso!');
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao conectar ao servidor. Tente novamente mais tarde.');
    }
});