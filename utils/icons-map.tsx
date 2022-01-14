import { InstagramIcon } from '@icons/InstagramIcon'
import { FacebookIcon } from '@icons/FacebookIcon'
import { TwitterIcon } from '@icons/TwitterIcon'

export const getIconComponentByName = (name: string) => {

    if (name == 'facebook') {
        return <FacebookIcon />;
    } else if (name == 'instagram') {
        return <InstagramIcon />;
    } else if (name == 'twitter') {
        return <TwitterIcon />;
    } else {
        return null;
    }
}
