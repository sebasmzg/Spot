const URLbase = "http://localhost:3000/usuarios";

export async function createNewPoint(user) {
    let response = await fetch(`${URLbase}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error('Error al crear el punto');
    }

    return response.json();
}
