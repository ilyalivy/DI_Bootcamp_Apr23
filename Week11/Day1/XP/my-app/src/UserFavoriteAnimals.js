const UserFavoriteAnimals = (props) => {
    const { animals } = props
    return (
        <div>
            <ul>
                {animals.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default UserFavoriteAnimals