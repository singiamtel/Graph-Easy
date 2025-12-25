/**
 * ASCII art output generator for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::As_ascii from the Perl Graph::Easy library
 */

export class AsAscii {
  protected _edge_style(style: string): string { throw new Error('Method not implemented: _edge_style'); }
  protected _arrow_style(style: string): string { throw new Error('Method not implemented: _arrow_style'); }
  protected _arrow_shape(shape: string): string { throw new Error('Method not implemented: _arrow_shape'); }
  protected _cross_style(style: string): string { throw new Error('Method not implemented: _cross_style'); }
  protected _insert_label(label: string): void { throw new Error('Method not implemented: _insert_label'); }
  protected _draw_hor(x1: number, x2: number, y: number, style: string): void { throw new Error('Method not implemented: _draw_hor'); }
  protected _draw_ver(x: number, y1: number, y2: number, style: string): void { throw new Error('Method not implemented: _draw_ver'); }
  protected _draw_cross(x: number, y: number, style: string): void { throw new Error('Method not implemented: _draw_cross'); }
  protected _draw_corner(x: number, y: number, dir: string, style: string): void { throw new Error('Method not implemented: _draw_corner'); }
  protected _draw_loop_hor(x: number, y: number, width: number, style: string): void { throw new Error('Method not implemented: _draw_loop_hor'); }
  protected _draw_loop_ver(x: number, y: number, height: number, style: string): void { throw new Error('Method not implemented: _draw_loop_ver'); }
  protected _draw_label(x: number, y: number, label: string): void { throw new Error('Method not implemented: _draw_label'); }
  protected _framebuffer(): string[][] { throw new Error('Method not implemented: _framebuffer'); }
  protected _printfb_aligned(text: string, align: string): void { throw new Error('Method not implemented: _printfb_aligned'); }
  protected _printfb_line(line: string): void { throw new Error('Method not implemented: _printfb_line'); }
  protected _printfb(x: number, y: number, text: string): void { throw new Error('Method not implemented: _printfb'); }
  protected _printfb_ver(x: number, y: number, text: string): void { throw new Error('Method not implemented: _printfb_ver'); }
  protected _point_style(style: string): string { throw new Error('Method not implemented: _point_style'); }
  protected _border_style(style: string): string { throw new Error('Method not implemented: _border_style'); }
  protected _arrow(direction: string, style: string): string { throw new Error('Method not implemented: _arrow'); }
  protected _unicode_arrow(direction: string, style: string): string { throw new Error('Method not implemented: _unicode_arrow'); }
  protected _draw_border(node: any): void { throw new Error('Method not implemented: _draw_border'); }
  as_ascii(): string { throw new Error('Method not implemented: as_ascii'); }
}
