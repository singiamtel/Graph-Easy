/**
 * Base parser for Graph::Easy.
 *
 * TypeScript port of Graph::Easy::Parser from the Perl Graph::Easy library
 */

import { Base } from './Base';
import { Easy } from './Easy';

export class Parser extends Base {
  protected graph_obj: Easy;

  protected _init(args: Record<string, any>): this { throw new Error('Method not implemented: _init'); }
  reset(): void { throw new Error('Method not implemented: reset'); }
  from_file(filename: string): Easy { throw new Error('Method not implemented: from_file'); }
  use_class(type: string, className: string): void { throw new Error('Method not implemented: use_class'); }
  protected _register_handler(name: string, handler: Function): void { throw new Error('Method not implemented: _register_handler'); }
  protected _register_attribute_handler(name: string, handler: Function): void { throw new Error('Method not implemented: _register_attribute_handler'); }
  protected _register_node_attribute_handler(name: string, handler: Function): void { throw new Error('Method not implemented: _register_node_attribute_handler'); }
  protected _new_group(name: string, attrs?: Record<string, any>): any { throw new Error('Method not implemented: _new_group'); }
  protected _add_group_match(group: any): void { throw new Error('Method not implemented: _add_group_match'); }
  protected _build_match_stack(): void { throw new Error('Method not implemented: _build_match_stack'); }
  protected _line_insert(line: string): void { throw new Error('Method not implemented: _line_insert'); }
  protected _clean_line(line: string): string { throw new Error('Method not implemented: _clean_line'); }
  from_text(text: string): Easy { throw new Error('Method not implemented: from_text'); }
  protected _edge_style(style: string): string { throw new Error('Method not implemented: _edge_style'); }
  protected _link_lists(): void { throw new Error('Method not implemented: _link_lists'); }
  protected _unquote_attribute(value: string): string { throw new Error('Method not implemented: _unquote_attribute'); }
  protected _unquote(value: string): string { throw new Error('Method not implemented: _unquote'); }
  protected _add_node(name: string, attrs?: Record<string, any>): any { throw new Error('Method not implemented: _add_node'); }
  protected _get_cluster_name(): string { throw new Error('Method not implemented: _get_cluster_name'); }
  protected _set_new_basename(name: string): void { throw new Error('Method not implemented: _set_new_basename'); }
  protected _autosplit_node(name: string): any { throw new Error('Method not implemented: _autosplit_node'); }
  protected _new_node(name: string, attrs?: Record<string, any>): any { throw new Error('Method not implemented: _new_node'); }
  protected _match_comma(): boolean { throw new Error('Method not implemented: _match_comma'); }
  protected _match_comment(): boolean { throw new Error('Method not implemented: _match_comment'); }
  protected _match_commented_line(): boolean { throw new Error('Method not implemented: _match_commented_line'); }
  protected _match_attributes(): Record<string, any> | null { throw new Error('Method not implemented: _match_attributes'); }
  protected _match_optional_attributes(): Record<string, any> | null { throw new Error('Method not implemented: _match_optional_attributes'); }
  protected _match_node(): any { throw new Error('Method not implemented: _match_node'); }
  protected _match_class_selector(): string | null { throw new Error('Method not implemented: _match_class_selector'); }
  protected _match_single_attribute(): [string, any] | null { throw new Error('Method not implemented: _match_single_attribute'); }
  protected _match_group_start(): any { throw new Error('Method not implemented: _match_group_start'); }
  protected _match_group_end(): boolean { throw new Error('Method not implemented: _match_group_end'); }
  protected _match_edge(): any { throw new Error('Method not implemented: _match_edge'); }
  protected _clean_attributes(attrs: Record<string, any>): Record<string, any> { throw new Error('Method not implemented: _clean_attributes'); }
  protected _parse_attributes(text: string): Record<string, any> { throw new Error('Method not implemented: _parse_attributes'); }
  parse_error(msg: string): void { throw new Error('Method not implemented: parse_error'); }
  protected _parser_cleanup(): void { throw new Error('Method not implemented: _parser_cleanup'); }
  protected _quote(text: string): string { throw new Error('Method not implemented: _quote'); }
}
