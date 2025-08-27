/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/AddTodoForm`; params?: Router.UnknownInputParams; } | { pathname: `/components/FilterTabs`; params?: Router.UnknownInputParams; } | { pathname: `/components/Home`; params?: Router.UnknownInputParams; } | { pathname: `/components/TodoItem`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/AddTodoForm`; params?: Router.UnknownOutputParams; } | { pathname: `/components/FilterTabs`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Home`; params?: Router.UnknownOutputParams; } | { pathname: `/components/TodoItem`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/AddTodoForm${`?${string}` | `#${string}` | ''}` | `/components/FilterTabs${`?${string}` | `#${string}` | ''}` | `/components/Home${`?${string}` | `#${string}` | ''}` | `/components/TodoItem${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/AddTodoForm`; params?: Router.UnknownInputParams; } | { pathname: `/components/FilterTabs`; params?: Router.UnknownInputParams; } | { pathname: `/components/Home`; params?: Router.UnknownInputParams; } | { pathname: `/components/TodoItem`; params?: Router.UnknownInputParams; };
    }
  }
}
