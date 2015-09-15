System.register([], function (_export) {
  'use strict';

  var ChildRouter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ChildRouter = (function () {
        function ChildRouter() {
          _classCallCheck(this, ChildRouter);

          this.heading = 'Child Router';
        }

        _createClass(ChildRouter, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }, { route: 'litmus', name: 'litmus', moduleId: 'litmus', nav: true, title: 'Style Test' }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }]);

            this.router = router;
          }
        }]);

        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci9jaGlsZC1yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsV0FBVzs7Ozs7Ozs7O0FBQVgsaUJBQVc7aUJBQVgsV0FBVztnQ0FBWCxXQUFXOztlQUN0QixPQUFPLEdBQUcsY0FBYzs7O3FCQURiLFdBQVc7O2lCQUdQLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxJQUFJLEVBQUUsU0FBUyxFQUFPLFFBQVEsRUFBRSxTQUFTLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ3RHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFTLFFBQVEsRUFBRSxPQUFPLEVBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLEVBQzNHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxJQUFJLEVBQUUsUUFBUSxFQUFRLFFBQVEsRUFBRSxRQUFRLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLEVBQ3pHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLENBQzVHLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQVpVLFdBQVciLCJmaWxlIjoiY2hpbGQtcm91dGVyL2NoaWxkLXJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGlsZFJvdXRlcntcbiAgaGVhZGluZyA9ICdDaGlsZCBSb3V0ZXInO1xuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsJ3dlbGNvbWUnXSwgIG5hbWU6ICd3ZWxjb21lJywgICAgICBtb2R1bGVJZDogJ3dlbGNvbWUnLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J1dlbGNvbWUnIH0sXG4gICAgICB7IHJvdXRlOiAndXNlcnMnLCAgICAgICAgIG5hbWU6ICd1c2VycycsICAgICAgICBtb2R1bGVJZDogJ3VzZXJzJywgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6J0dpdGh1YiBVc2VycycgfSxcbiAgICAgIHsgcm91dGU6ICdsaXRtdXMnLCAgICAgICAgbmFtZTogJ2xpdG11cycsICAgICAgIG1vZHVsZUlkOiAnbGl0bXVzJywgICAgICAgbmF2OiB0cnVlLCB0aXRsZTonU3R5bGUgVGVzdCcgfSxcbiAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCAgbmFtZTogJ2NoaWxkLXJvdXRlcicsIG1vZHVsZUlkOiAnY2hpbGQtcm91dGVyJywgbmF2OiB0cnVlLCB0aXRsZTonQ2hpbGQgUm91dGVyJyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9