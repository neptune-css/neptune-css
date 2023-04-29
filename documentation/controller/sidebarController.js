

const badgeButton = $('#badge-button');
const badgeTarget = badgeButton.id + '-view'
const badgeOnClick = 'openView("' + badgeTarget + '");';
// badgeButton.attr('onliclick', 'badge'+'View')



function openView(targetId) { 
    $('.sidebar-link').css('display', 'none');
    $('#' + targetId).css('display', 'block');
}