/**
 * Position is a critical concept in animation, and quite honestly,
 * few libraries do a really good job of tracking positions and
 * enabling complex layout animations as a result of the defacto
 * layouts of their components.
 *
 * I would like to explore new concepts for tracking position on
 * the screen and enabling animations and movements as something
 * easy and default.
 *
 * I think the first challenge to consider will be providing
 * performant rendering for arbitrarily large lists and scrolling
 * by using transforms and a fake scroll container.
 *
 * The tricky (and interesting) part of this challenge is trying
 * to design these tools in such a way that the interfaces are
 * agnostice of the rendering layer, and adaptors can be developed
 * for different view frameworks (React, Vuejs, Angular).
 *
 * This separation is important to me so that the software design
 * for these primitives become portable to the framework and even
 * the language. I saw the success of Flutter's (original) BLoC
 * pattern demonstrate some incredible features that are not
 * resetricted entirely to Flutter's technology, but are portable
 * to any frontend framework that has streaming data primitives
 * (rxdart, RxJS, etc) and a context/scope/dependency injection
 * mechanism for sharing state management BLoCs between parents
 * to arbitrarily nested child components without the boilerplate
 * of redefining the props for all input and output data flows.
 *
 */
