export default function Profile(username, tag, location, avatar, stats = followers, views, likes) {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={user.avatar}
                    alt={user.username}
                    class="avatar"
                />
                <p class="name">{user.username}</p>
                <p class="tag">{user.tag}</p>
                <p class="location">{user.location}</p>
            </div>

            <ul class={user.stats}>
                <li>
                    <span class="label">{user.stats.followers}</span>
                    <span class="quantity">5603</span>
                </li>
                <li>
                    <span class="label">{user.stats.views}</span>
                    <span class="quantity">4827</span>
                </li>
                <li>
                    <span class="label">{user.stats.likes}</span>
                    <span class="quantity">1308</span>
                </li>
            </ul>
        </div>
    );
}