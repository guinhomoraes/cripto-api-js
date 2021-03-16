$(document).ready(function () {


    const apiKey = 
    {
        key: 'your key'
    }

    $.ajax({
        type: "get",
        url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY="+apiKey.key,
        dataType: "json",
        success: function (response) 
        {  
            for(let i =0; i< response.data.length; i++)
            {
                let conteudo = "<tr>"
                                    +"<td>"+response.data[i].name+"</td>"
                                    +"<td>"+response.data[i].symbol+"</td>"
                                    +"<td>"+response.data[i].slug+"</td>"
                                    +"<td>"+response.data[i].rank+"</td>"
                                "</tr>";

                $('.table-crypto > tbody').append(conteudo);
            }

            $('.table-crypto').DataTable();
            $('.progress').addClass('d-none');

        },
        error: function (response) 
        {
            $('.erro').removeClass('d-none');
            console.log(response);
        },
    });

});