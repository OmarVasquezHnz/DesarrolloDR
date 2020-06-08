console.log('it works')

const express = require('express');
const path = require('path')
app = express();

app.set('port', process.env.PORT || 3000)






app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

