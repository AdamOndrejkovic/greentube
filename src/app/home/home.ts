import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  isHeaderVisible = true;
  lastScrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    const portfolioSection = document.querySelector('.portfolio-section');
    const portfolioTop = portfolioSection?.getBoundingClientRect().top || 0;

    if (portfolioTop <= window.innerHeight) {
      portfolioSection?.classList.add('visible');
    } else {
      portfolioSection?.classList.remove('visible');
    }

    if (currentScrollPosition > this.lastScrollPosition) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }

    this.lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // For Mobile or negative scrolling
  }
}
