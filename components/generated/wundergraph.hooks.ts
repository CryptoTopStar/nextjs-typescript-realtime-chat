// Code generated by wunderctl. DO NOT EDIT.

import {
	AddMessageResponse,
	AddMessageInput,
	InternalAddMessageInput,
	InjectedAddMessageInput,
	AllUsersResponse,
	AllUsersInput,
	InternalAllUsersInput,
	InjectedAllUsersInput,
	ChangeUserNameResponse,
	ChangeUserNameInput,
	InternalChangeUserNameInput,
	InjectedChangeUserNameInput,
	CountriesResponse,
	DeleteAllMessagesByUserEmailResponse,
	DeleteAllMessagesByUserEmailInput,
	InternalDeleteAllMessagesByUserEmailInput,
	InjectedDeleteAllMessagesByUserEmailInput,
	GermanyResponse,
	HelloResponse,
	MessagesResponse,
	MockQueryResponse,
	QueryResponse,
	SetLastLoginResponse,
	SetLastLoginInput,
	InternalSetLastLoginInput,
	InjectedSetLastLoginInput,
	UpdateUserResponse,
	UpdateUserInput,
	InternalUpdateUserInput,
	InjectedUpdateUserInput,
	UsResponse,
	UserInfoResponse,
	InternalUserInfoInput,
	InjectedUserInfoInput,
} from "./models";
import type { WunderGraphRequestContext, Context, WunderGraphRequest, WunderGraphResponse } from "@wundergraph/sdk";

import type { User } from "./wundergraph.server";

export type AuthenticationResponse = AuthenticationOK | AuthenticationDeny;

export interface AuthenticationOK {
	status: "ok";
	user: User;
}

export interface AuthenticationDeny {
	status: "deny";
	message: string;
}

// use SKIP to skip the hook and continue the request / response chain without modifying the request / response
export type SKIP = "skip";

// use CANCEL to skip the hook and cancel the request / response chain
// this is semantically equal to throwing an error (500)
export type CANCEL = "cancel";

export type WUNDERGRAPH_OPERATION =
	| "AddMessage"
	| "AllUsers"
	| "ChangeUserName"
	| "Countries"
	| "DeleteAllMessagesByUserEmail"
	| "Germany"
	| "Hello"
	| "Messages"
	| "MockQuery"
	| "Query"
	| "SetLastLogin"
	| "UpdateUser"
	| "Us"
	| "UserInfo";

export interface GlobalHooksConfig {
	httpTransport?: {
		// onRequest is called right before the request is sent
		// it can be used to modify the request
		// you can return SKIP to skip the hook and continue the request chain without modifying the request
		// you can return CANCEL to cancel the request chain and return a 500 error
		// not returning anything or undefined has the same effect as returning SKIP
		onRequest?: {
			hook: (
				ctx: WunderGraphRequestContext<User>,
				request: WunderGraphRequest
			) => Promise<WunderGraphRequest | SKIP | CANCEL | void>;
			// calling the httpTransport hooks has a case, because the custom httpTransport hooks have to be called for each request
			// for this reason, you have to explicitly enable the hook for each Operation
			enableForOperations?: WUNDERGRAPH_OPERATION[];
			// enableForAllOperations will disregard the enableForOperations property and enable the hook for all operations
			enableForAllOperations?: boolean;
		};
		// onResponse is called right after the response is received
		// it can be used to modify the response
		// you can return SKIP to skip the hook and continue the response chain without modifying the response
		// you can return CANCEL to cancel the response chain and return a 500 error
		// not returning anything or undefined has the same effect as returning SKIP
		onResponse?: {
			hook: (
				ctx: WunderGraphRequestContext<User>,
				response: WunderGraphResponse
			) => Promise<WunderGraphResponse | SKIP | CANCEL | void>;
			// calling the httpTransport hooks has a case, because the custom httpTransport hooks have to be called for each request
			// for this reason, you have to explicitly enable the hook for each Operation
			enableForOperations?: WUNDERGRAPH_OPERATION[];
			// enableForAllOperations will disregard the enableForOperations property and enable the hook for all operations
			enableForAllOperations?: boolean;
		};
	};
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface HooksConfig {
	global?: GlobalHooksConfig;
	authentication?: {
		postAuthentication?: (user: User) => Promise<void>;
		mutatingPostAuthentication?: (user: User) => Promise<AuthenticationResponse>;
		revalidate?: (user: User) => Promise<AuthenticationResponse>;
	};
	queries?: {
		AllUsers?: {
			mockResolve?: (ctx: Context<User>, input: InjectedAllUsersInput) => Promise<AllUsersResponse>;
			preResolve?: (ctx: Context<User>, input: InjectedAllUsersInput) => Promise<void>;
			mutatingPreResolve?: (ctx: Context<User>, input: InjectedAllUsersInput) => Promise<InjectedAllUsersInput>;
			postResolve?: (ctx: Context<User>, input: InjectedAllUsersInput, response: AllUsersResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>, input: InjectedAllUsersInput) => Promise<void | AllUsersResponse>;
			mutatingPostResolve?: (
				ctx: Context<User>,
				input: InjectedAllUsersInput,
				response: AllUsersResponse
			) => Promise<AllUsersResponse>;
		};
		Countries?: {
			mockResolve?: (ctx: Context<User>) => Promise<CountriesResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: CountriesResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | CountriesResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: CountriesResponse) => Promise<CountriesResponse>;
		};
		Germany?: {
			mockResolve?: (ctx: Context<User>) => Promise<GermanyResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: GermanyResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | GermanyResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: GermanyResponse) => Promise<GermanyResponse>;
		};
		Hello?: {
			mockResolve?: (ctx: Context<User>) => Promise<HelloResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: HelloResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | HelloResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: HelloResponse) => Promise<HelloResponse>;
		};
		Messages?: {
			mockResolve?: (ctx: Context<User>) => Promise<MessagesResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: MessagesResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | MessagesResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: MessagesResponse) => Promise<MessagesResponse>;
		};
		MockQuery?: {
			mockResolve?: (ctx: Context<User>) => Promise<MockQueryResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: MockQueryResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | MockQueryResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: MockQueryResponse) => Promise<MockQueryResponse>;
		};
		Query?: {
			mockResolve?: (ctx: Context<User>) => Promise<QueryResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: QueryResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | QueryResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: QueryResponse) => Promise<QueryResponse>;
		};
		Us?: {
			mockResolve?: (ctx: Context<User>) => Promise<UsResponse>;
			preResolve?: (ctx: Context<User>) => Promise<void>;
			postResolve?: (ctx: Context<User>, response: UsResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>) => Promise<void | UsResponse>;
			mutatingPostResolve?: (ctx: Context<User>, response: UsResponse) => Promise<UsResponse>;
		};
		UserInfo?: {
			mockResolve?: (ctx: Context<User>, input: InjectedUserInfoInput) => Promise<UserInfoResponse>;
			preResolve?: (ctx: Context<User>, input: InjectedUserInfoInput) => Promise<void>;
			mutatingPreResolve?: (ctx: Context<User>, input: InjectedUserInfoInput) => Promise<InjectedUserInfoInput>;
			postResolve?: (ctx: Context<User>, input: InjectedUserInfoInput, response: UserInfoResponse) => Promise<void>;
			customResolve?: (ctx: Context<User>, input: InjectedUserInfoInput) => Promise<void | UserInfoResponse>;
			mutatingPostResolve?: (
				ctx: Context<User>,
				input: InjectedUserInfoInput,
				response: UserInfoResponse
			) => Promise<UserInfoResponse>;
		};
	};
	mutations?: {
		AddMessage?: {
			mockResolve?: (ctx: Context<User>, input: InjectedAddMessageInput) => Promise<AddMessageResponse>;
			preResolve?: (ctx: Context<User>, input: InjectedAddMessageInput) => Promise<void>;
			mutatingPreResolve?: (ctx: Context<User>, input: InjectedAddMessageInput) => Promise<InjectedAddMessageInput>;
			postResolve?: (ctx: Context<User>, input: InjectedAddMessageInput, response: AddMessageResponse) => Promise<void>;
			mutatingPostResolve?: (
				ctx: Context<User>,
				input: InjectedAddMessageInput,
				response: AddMessageResponse
			) => Promise<AddMessageResponse>;
		};
		ChangeUserName?: {
			mockResolve?: (ctx: Context<User>, input: InjectedChangeUserNameInput) => Promise<ChangeUserNameResponse>;
			preResolve?: (ctx: Context<User>, input: InjectedChangeUserNameInput) => Promise<void>;
			mutatingPreResolve?: (
				ctx: Context<User>,
				input: InjectedChangeUserNameInput
			) => Promise<InjectedChangeUserNameInput>;
			postResolve?: (
				ctx: Context<User>,
				input: InjectedChangeUserNameInput,
				response: ChangeUserNameResponse
			) => Promise<void>;
			mutatingPostResolve?: (
				ctx: Context<User>,
				input: InjectedChangeUserNameInput,
				response: ChangeUserNameResponse
			) => Promise<ChangeUserNameResponse>;
		};
		DeleteAllMessagesByUserEmail?: {
			mockResolve?: (
				ctx: Context<User>,
				input: InjectedDeleteAllMessagesByUserEmailInput
			) => Promise<DeleteAllMessagesByUserEmailResponse>;
			preResolve?: (ctx: Context<User>, input: InjectedDeleteAllMessagesByUserEmailInput) => Promise<void>;
			mutatingPreResolve?: (
				ctx: Context<User>,
				input: InjectedDeleteAllMessagesByUserEmailInput
			) => Promise<InjectedDeleteAllMessagesByUserEmailInput>;
			postResolve?: (
				ctx: Context<User>,
				input: InjectedDeleteAllMessagesByUserEmailInput,
				response: DeleteAllMessagesByUserEmailResponse
			) => Promise<void>;
			mutatingPostResolve?: (
				ctx: Context<User>,
				input: InjectedDeleteAllMessagesByUserEmailInput,
				response: DeleteAllMessagesByUserEmailResponse
			) => Promise<DeleteAllMessagesByUserEmailResponse>;
		};
		UpdateUser?: {
			mockResolve?: (ctx: Context<User>, input: InjectedUpdateUserInput) => Promise<UpdateUserResponse>;
			preResolve?: (ctx: Context<User>, input: InjectedUpdateUserInput) => Promise<void>;
			mutatingPreResolve?: (ctx: Context<User>, input: InjectedUpdateUserInput) => Promise<InjectedUpdateUserInput>;
			postResolve?: (ctx: Context<User>, input: InjectedUpdateUserInput, response: UpdateUserResponse) => Promise<void>;
			mutatingPostResolve?: (
				ctx: Context<User>,
				input: InjectedUpdateUserInput,
				response: UpdateUserResponse
			) => Promise<UpdateUserResponse>;
		};
	};
}