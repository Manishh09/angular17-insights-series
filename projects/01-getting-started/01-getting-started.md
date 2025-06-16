## ✨ Features Demonstrated

### 🎮 New Control Flow Syntax
Experience the intuitive `@if`, `@for`, and `@switch` syntax that replaces verbose structural directives.

```typescript
// ✅ New Angular 17 way
@if (user.isLoggedIn) {
  <welcome-message [user]="user" />
} @else {
  <login-form />
}

@for (item of items; track item.id) {
  <item-card [item]="item" />
} @empty {
  <empty-state />
}
```

### ⚡ Deferrable Views
Smart component loading with `@defer` blocks for optimal performance.

```typescript
@defer (on viewport) {
  <heavy-component />
} @loading {
  <loading-spinner />
} @placeholder {
  <placeholder-content />
}
```

### 🌐 Seamless SSR & Hydration
Server-side rendering setup in seconds with `@angular/ssr`.

```bash
# Enable SSR in new projects
ng new my-app --ssr

# Add SSR to existing projects
ng add @angular/ssr
```

### 🔧 Developer Productivity Tools
- **Vite + esbuild**: Lightning-fast builds and dev server
- **New lifecycle hooks**: `afterRender` and `afterNextRender`
- **Standalone APIs**: No more NgModules boilerplate