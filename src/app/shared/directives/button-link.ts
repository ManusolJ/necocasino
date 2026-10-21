import { input, computed, Directive } from '@angular/core';

import type { ButtonSize } from '@models/button-size';

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-4',
};

@Directive({
  selector: 'a[appButtonLink]',
  host: {
    class:
      'inline-flex items-center justify-center gap-2 rounded-lg bg-accent font-medium text-bg hover:bg-accent/90 active:translate-y-px',
    '[class]': 'sizeClasses()',
  },
})
export class ButtonLink {
  readonly size = input<ButtonSize>('md');

  protected readonly sizeClasses = computed(() => SIZE_CLASSES[this.size()]);
}
