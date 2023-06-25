const enviarForm = (props) => {
    return { type: 'FORM_DATA', payload: props.formulario }
};

export default enviarForm;