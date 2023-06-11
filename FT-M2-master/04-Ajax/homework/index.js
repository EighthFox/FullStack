$("#boton").click(() => {
    $("#lista").empty();
    $.get("http://localhost:5000/amigos", (response) => {
        // for (const user of response) {
        //     $('<div>${user.name}</div>').appendTo("body");
        // }
        for (const user of response) {
            $(`<li id=${user.id} class="friends">${user.name} X</li>`).appendTo("#lista")
        }
    })
})
$("#search").click(() => {
    const id = $("#input")[0].value; //el input (en este caso el input llamado userId) siempre viene en una array, por esta razón solicitamos la posición 0 porque el input esta ahí, en la posición 0 de una array.
     $.get(`http://localhost:5000/amigos/${id}`,(response) => {
        // $(`<div class="friend">${response.name}</div>`).appendTo("#amigo")
        $("#amigo").text(response.name);
    })
})
$("#delete").click(() => {
    const id = $("#inputDelete")[0].value;
    const nameF = $("#" + id).text();
    $.ajax({url: `http://localhost:5000/amigos/${id}`, type: "DELETE", success: (response) => {
        // $(`<div class="friend">${response.name}</div>`).appendTo("#amigo")
        $("#success").text(`Tu amigo ${nameF} fue borrado con éxito`);
        $("#lista").empty();
        for (const user of response) {
            $(`<li id=${user.id} class="friends">${user.name} X</li>`).appendTo("#lista")
        }
    }})
})

