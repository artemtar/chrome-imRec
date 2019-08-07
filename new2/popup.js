$(function(){

    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });

    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total', 'limit'],function(budget){
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if (amount){
                newTotal += parseInt(amount);
            }


            $('#total').text(newTotal);
            $('#amount').val('');

           

        });
    });
});