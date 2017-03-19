export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('blog'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('blog'),
    this.use('toUp', { duration: 500 }),
    this.reverse('toDown', { duration: 500 })
  );
}
