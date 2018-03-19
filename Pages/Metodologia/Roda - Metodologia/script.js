$(document).ready(function() {
    console.log("yo");
    $("g").click(function (event) {

        //dado o argumento da função o target vai procurar o primeiro filho (polygon) do selector neste caso o "g"
        //a partir dai vai bsucar o id deste filho e convertê-lo para string de forma a poder ser comparado
        //no switch
        switch(event.target.id.toString()){
            case "estrategia_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#estrategia-content").addClass("appear");
                break;
            case "modelo_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#modelo-content").addClass("appear");
                break;
            case "automacao_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#automacao-content").addClass("appear");
                break;
            case "plataforma_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#plataforma-content").addClass("appear");
                break;
            case "processos_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#processos-content").addClass("appear");
                break;
            case "venda_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#venda-content").addClass("appear");
                break;
            case "angariacao_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#angariacao-content").addClass("appear");
                break;
            case "enriquecimento_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#enriquecimento-content").addClass("appear");
                break;
            case "relacionamento_field":
                $(".roda").css("filter","blur(10px)");
                $(".roda-overlay").addClass("scale-up");
                $("#relacionamento-content").addClass("appear");
                break;
        }
    });
    $( "#close-button" ).click(function(){
        $(".roda").css("filter","blur(0px)");
        $(".roda-overlay").removeClass("scale-up");
        $("*").removeClass("appear");
    });

    $("path").click(function () {
        if($(this).parent().is('#estrategia')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#estrategia-content").addClass("appear");
        }
        else if($(this).parent().is('#modelo')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#modelo-content").addClass("appear");
        }
        else if($(this).parent().is('#automacao')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#automacao-content").addClass("appear");
        }
        else if($(this).parent().is('#plataformas')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#plataforma-content").addClass("appear");
        }
        else if($(this).parent().is('#processos')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#processos-content").addClass("appear");
        }
        else if($(this).parent().is('#vendas')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#venda-content").addClass("appear");
        }
        else if($(this).parent().is('#angariacao')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#angariacao-content").addClass("appear");
        }
        else if($(this).parent().is('#enriquecimento')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#enriquecimento-content").addClass("appear");
        }
        else if($(this).parent().is('#relacionamento')){
            $(".roda").css("filter","blur(10px)");
            $(".roda-overlay").addClass("scale-up");
            $("#relacionamento-content").addClass("appear");
        }
    });
});