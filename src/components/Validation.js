const Validation = (props) => {
    return (
        <div
            style={{
                margin: "3px",
            }}>
            <span style={{ color: '#f06a6f', fontSize: '13px' }}>{props.message}</span>
        </div>
    );
};

export default Validation;