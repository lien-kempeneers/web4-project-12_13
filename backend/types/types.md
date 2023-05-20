# Types

You use types to describe the contract that specific data needs to conform to.
For instance to enforce specific fields to be present in the input of an API request.
By using types, you can benefit from static typing possibilities in Typescript and also use autocompletion in your IDE.

export interface User{
username: string;
email: string;
password: string;
id: number;
}

export interface Task{
id: number;
title: string;
description: string;
deadline: Date;
userId: number;
}

export interface Milestone{
id: number;
title: string;
description: string;
deadline: Date;
taskId: number;
}

export interface Profile{
id: number;
name: string;
biography: string;
}
