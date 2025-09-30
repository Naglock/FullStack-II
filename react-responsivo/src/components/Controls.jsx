function Controls({ onImageChange, onTopTextChange, onBottomTextChange}) {
    const handleImage = e => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            onImageChange(url);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImage} />
            <input type="text" placeholder="Texto arriba" onChange={e => onTopTextChange(e.target.value)} />
            <input type="text" placeholder="Texto abajo" onChange={e => onBottomTextChange(e.target.value)} />

        </div>
    )
}
export default Controls;