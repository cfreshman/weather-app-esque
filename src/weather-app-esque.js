// core dependency
;[
    '/lib/2/common.js',
].map(src=>document.head.append((x=>Object.assign(x,{innerHTML:(src=>(x=>{x.withCredentials=false;x.open('GET',src,false);x.send();return x.responseText})(new XMLHttpRequest()))(new URL(src,'https://uh.software').toString())}))(document.createElement('script'))))

// other

// ignore reimport
const names = lists.of('wae WAE')
if (names.some(name => !window[name])) {
    
    /* script
    */
    const version = `weather-app-esque v0.0.1`
    const definition = {
        
    }
    names.map(name => window[name] = merge(definition, {
        version, v:version, [name]:version,
    }))

}
