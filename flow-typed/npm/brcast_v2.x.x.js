// flow-typed signature: 350324305902c2e2db6a66ff64a07d6d
// flow-typed version: <<STUB>>/brcast_v^2.0.0/flow_v0.48.0

// TODO: This should be submitted to flow-typed
// https://github.com/flowtype/flow-typed

declare module 'brcast' {
  declare export type UnsubscribeFunction = () => void;
  declare export type SubscriptionCallback<State> = (State) => void;
  declare export type Broadcast<State> = {
    getState: () => State,
    setState: (State) => void,
    subscribe: (callbackFn: SubscriptionCallback<State>) => UnsubscribeFunction,
  };

  declare export default function createBroadcast<State>(initialState: State): Broadcast<State>;
}
