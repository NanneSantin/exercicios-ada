const ColorSwitch = ({ onChangeColor }) => {

    function handleClick(e) {
        e.stopPropagation(); //não deixa renderizar a tela, ou seja, ele executação sua ação sem renderizar a tela
        onChangeColor()
    }

    return (
        <button onClick={(e) => handleClick(e)}>Alterar Cor</button>
    );
};

export default ColorSwitch;