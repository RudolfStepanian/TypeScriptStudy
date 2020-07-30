enum Membership {
    simple,
    standert,
    premium
}

const membership = Membership.standert;
const membershipReverse = Membership[2];
console.log(membershipReverse);

enum SocialMedia {
    Facebook = 'Facebook',
    LinkedIn = 'LinkedIn'
}

const social = SocialMedia.Facebook;