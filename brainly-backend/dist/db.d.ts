import mongoose = require("mongoose");
import { Types } from "mongoose";
export declare const User: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username: string;
        password: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        username: string;
        password: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Tags: mongoose.Model<{
    title: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
}, mongoose.Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        title: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        title: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Content: mongoose.Model<{
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        type: "link" | "article" | "tweet" | "youtube";
        title: string;
        link?: string | null;
        tags?: Types.ObjectId | null;
        body?: string | null;
        userId?: Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        type: "link" | "article" | "tweet" | "youtube";
        title: string;
        link?: string | null;
        tags?: Types.ObjectId | null;
        body?: string | null;
        userId?: Types.ObjectId | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "link" | "article" | "tweet" | "youtube";
    title: string;
    link?: string | null;
    tags?: Types.ObjectId | null;
    body?: string | null;
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Link: mongoose.Model<{
    userId: Types.ObjectId;
    hash: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: Types.ObjectId;
    hash: string;
}, mongoose.Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: Types.ObjectId;
        hash: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        userId: Types.ObjectId;
        hash: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map