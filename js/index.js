
$(function()
{
$("[data-toggle='tooltip']").tooltip();
$("[data-toggle='popover']").popover();
});

$('#contacto').on('show.bs.modal', function(e)
{
console.log('el modal se está mostrando');

$('#contactoBtn').prop('disabled', true);
});

$('#contacto').on('hidden.bs.modal', function(e)
{

$('#contactoBtn').prop('disabled', false);
});

