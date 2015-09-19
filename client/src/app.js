export class App {
  configureRouter(config, router){
    config.title = 'Level Up';
    config.map([
      { route: ['','welcome'],    name: 'welcome',                 moduleId: 'welcome',                 nav: true, title:'Welcome' },
      { route: 'users',           name: 'users',                   moduleId: 'users',                   nav: true, title:'Github Users' },
      { route: 'litmus',          name: 'litmus',                  moduleId: 'litmus',                  nav: true, title:'Style Test' },
      { route: 'child-router',    name: 'child-router',            moduleId: 'child-router',            nav: true, title:'Child Router' },
      { route: 'houses-of-level', name: 'houses-of-level',         moduleId: 'houses-of-level',         nav: true, title:'Houses of level' }
    ]);

    this.router = router;
  }
}
