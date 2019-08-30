/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2019-08-26 07:32:16 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c postgres://username:password@localhost:5432/tourdb -t reviews -t users -t tours -s public
 *
 */


export namespace reviewsFields {
    export type id = string;
    export type tour_id = string;
    export type review_title = string;
    export type review_long_text = string | null;
    export type start = number;

}

export interface reviews {
    id: reviewsFields.id;
    tour_id: reviewsFields.tour_id;
    review_title: reviewsFields.review_title;
    review_long_text: reviewsFields.review_long_text;
    start: reviewsFields.start;

}

export namespace usersFields {
    export type id = string;
    export type email = string;
    export type name = string;

}

export interface users {
    id: usersFields.id;
    email: usersFields.email;
    name: usersFields.name;

}

export namespace toursFields {
    export type id = string;
    export type location = string;
    export type tour_title = string;
    export type tour_category = string;
    export type tour_description = string | null;
    export type price = number;
    export type currency = string;
    export type img = Array<string> | null;

}

export interface tours {
    id: toursFields.id;
    location: toursFields.location;
    tour_title: toursFields.tour_title;
    tour_category: toursFields.tour_category;
    tour_description: toursFields.tour_description;
    price: toursFields.price;
    currency: toursFields.currency;
    img: toursFields.img;

}
