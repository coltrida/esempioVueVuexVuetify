const help = () => {
    let base = '';
    if(window.location.host === 'esempiovuevuexvutify.test'){
        base = 'http://esempiovuevuexvutify.test/api/';
    } else {
        base = '';
    }
    return {
        linkproduct: base+'products',
        linkaddproduct: base+'addProduct',
    };
};
export default help;
