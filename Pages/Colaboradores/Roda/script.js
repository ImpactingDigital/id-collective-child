$(document).ready(function() {
    $("path").click(function (event) {

        switch(event.target.id.toString()){
            case "gestao_hover":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#gestao-content").addClass("appear");
                break;
            case "marketing_hover":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#marketing-content").addClass("appear");
                break;
            case "ti_hover":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#ti-content").addClass("appear");
                break;
            case "comunicacao_hover":
                $(".roda").css("filter","blur(6px)");
                $(".roda-overlay").addClass("scale-up");
                $("#comunicacao-content").addClass("appear");
                break;
        }
    });
    $( "#close-button" ).click(function(){
        $(".roda").css("filter","blur(0px)");
        $(".roda-overlay").removeClass("scale-up");
        $("*").removeClass("appear");
    });
}); 