$(document).ready(function() {
    $("path").click(function (event) {

        switch(event.target.id.toString()){
            case "avaliacao_div":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#avaliacao-content").addClass("appear");
                break;
            case "workshop_div":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#workshop-content").addClass("appear");
                break;
            case "integracao_div":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#integracao-content").addClass("appear");
                break;
            case "operacao_div":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#operacao-content").addClass("appear");
                break;
            case "formacao_div":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#formacao-content").addClass("appear");
                break;
            case "analise_div":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#analise-content").addClass("appear");
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
            $(".roda").css("filter","blur(6px)");
            $(".roda-overlay").addClass("scale-up");
            $("#avaliacao-content").addClass("appear");
        }
        else if($(this).parent().is('#modelo')){
            $(".roda").css("filter","blur(6px)");
            $(".roda-overlay").addClass("scale-up");
            $("#workshop-content").addClass("appear");
        }
        else if($(this).parent().is('#automacao')){
            $(".roda").css("filter","blur(6px)");
            $(".roda-overlay").addClass("scale-up");
            $("#integracao-content").addClass("appear");
        }
        else if($(this).parent().is('#plataformas')){
            $(".roda").css("filter","blur(6px)");
            $(".roda-overlay").addClass("scale-up");
            $("#oper-content").addClass("appear");
        }
        else if($(this).parent().is('#processos')){
            $(".roda").css("filter","blur(6px)");
            $(".roda-overlay").addClass("scale-up");
            $("#processos-content").addClass("appear");
        }
        else if($(this).parent().is('#vendas')){
            $(".roda").css("filter","blur(6px)");
            $(".roda-overlay").addClass("scale-up");
            $("#venda-content").addClass("appear");
        }
    });
}); 