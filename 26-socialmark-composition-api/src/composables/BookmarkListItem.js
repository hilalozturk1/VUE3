import {computed,inject} from "vue";
import { useStore } from "vuex";
export default function (item) {
    const appAxios = inject("appAxios");
    const store = useStore();
    //methods
    const likeItem = () => {
        console.log('_userLikes', _userLikes);
        let likes = [..._userLikes.value];
        if (!alreadyLiked.value) {
            likes = [...likes, item.id]
        }
        else {
            likes = likes.filter(l => l != item.id)
        }
        appAxios.patch("/users/" + _getCurrentUser.value.id, { likes }).then(like_response => {//
            console.log('like_response', like_response)
            store.commit("addToLikes", likes);
        })
    };
    const bookmarkItem = () => {
        let bookmarks = [..._userBookmarks.value];
        if (!alreadyBookmarked.value) {
            bookmarks = [...bookmarks, item.id]
        }
        else {
            bookmarks = bookmarks.filter(b => b != item.id)
        }
        appAxios.patch("/users/" + _getCurrentUser.value.id, { bookmarks }).then(() => {//
            store.commit("setBookmarks", bookmarks);
        })
    }
    //computed
    const _getCurrentUser = computed(() => store.getters._getCurrentUser);
    const _userLikes = computed(() => store.getters._userLikes);
    const _userBookmarks = computed(() => store.getters._userBookmarks);

    const categoryName = computed(() => item?.category?.name || "-")
    const userName = computed(() => item?.user?.fullname || "-")
    const alreadyLiked = computed(() => _userLikes?.value.indexOf(item.id) > -1)
    const alreadyBookmarked = computed(() => _userBookmarks?.value.indexOf(item.id) > -1)

    return { likeItem, bookmarkItem, _getCurrentUser, _userLikes, _userBookmarks, categoryName, userName, alreadyLiked, alreadyBookmarked };
}