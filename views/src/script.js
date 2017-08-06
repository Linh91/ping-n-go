var getFieldData = getFormData.getNamedFormElementData

var form = document.querySelector('#location-form')

var location = getFieldData(form, 'location')

console.log(JSON.stringify(location))
