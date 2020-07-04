
function consultaCEP(){
    var cep = document.getElementById("cep").value;
    var url1  = "https://viacep.com.br/ws/" + cep +"/json/";
    
    console.log(url1);
        $.ajax({
            url: url1,
            type : "GET",
            success: function(response){
                $("#logradouro").html(response.logradouro)
                //document.getElementById("lougadouro").innerHTML = response.logradouro
                $("#bairro").html(response.bairro)
                $("#uf").html(response.uf)
                $("#cidade").html(response.localidade)
                
                console.log(response)
            }
    
        })
    
    }