/**
 * Base class for Graph::Easy objects like nodes, edges etc.
 *
 * TypeScript port of Graph::Easy::Base from the Perl Graph::Easy library
 */

/**
 * Base class for all Graph::Easy objects
 */
export class Base {
  protected id: number;
  protected debug: boolean;
  protected fatal_errors: boolean;
  protected error_msg: string;
  protected _catch_warnings: boolean;
  protected _catch_errors: boolean;
  protected _warnings: string[];
  protected _errors: string[];
  protected _old_self?: Base;
  protected graph?: any; // Will be typed as Easy later
  protected class_name: string;
  protected cache: Record<string, any>;
  protected att: Record<string, any>;

  // Static ID counter
  private static id_counter: number = 0;

  /**
   * Generate a new unique ID
   */
  protected static _new_id(): number {
    throw new Error('Method not implemented: _new_id');
  }

  /**
   * Reset the ID counter
   */
  protected static _reset_id(): void {
    throw new Error('Method not implemented: _reset_id');
  }

  /**
   * Create a new object
   */
  constructor(args?: Record<string, any> | string) {
    throw new Error('Method not implemented: constructor');
  }

  /**
   * Generic init routine, to be overridden in subclasses
   */
  protected _init(args: Record<string, any>): this {
    throw new Error('Method not implemented: _init');
  }

  /**
   * Return the object itself
   */
  self(): this {
    throw new Error('Method not implemented: self');
  }

  /**
   * Set/get the flag that determines whether errors are fatal
   */
  no_fatal_errors(value?: boolean): boolean {
    throw new Error('Method not implemented: no_fatal_errors');
  }

  /**
   * Set/get the flag that determines whether errors are fatal
   */
  fatal_errors(value?: boolean): boolean {
    throw new Error('Method not implemented: fatal_errors');
  }

  /**
   * Get or set the error message
   */
  error(msg?: string): string {
    throw new Error('Method not implemented: error');
  }

  /**
   * Return error message properly escaped as HTML
   */
  error_as_html(): string {
    throw new Error('Method not implemented: error_as_html');
  }

  /**
   * Catch all warnings and errors
   */
  catch_messages(enable: boolean): this {
    throw new Error('Method not implemented: catch_messages');
  }

  /**
   * Catch all warnings
   */
  catch_warnings(enable?: boolean): boolean | this {
    throw new Error('Method not implemented: catch_warnings');
  }

  /**
   * Catch all errors
   */
  catch_errors(enable?: boolean): boolean | this {
    throw new Error('Method not implemented: catch_errors');
  }

  /**
   * Return all warnings that occurred after catch_messages(true)
   */
  warnings(): string[] {
    throw new Error('Method not implemented: warnings');
  }

  /**
   * Return all errors that occurred after catch_messages(true)
   */
  errors(): string[] {
    throw new Error('Method not implemented: errors');
  }

  /**
   * Warn with the given message
   */
  warn(msg: string): void {
    throw new Error('Method not implemented: warn');
  }

  /**
   * Throw an error
   */
  protected _croak(msg: string, level?: number): never {
    throw new Error('Method not implemented: _croak');
  }

  /**
   * Get/set the subclass
   */
  sub_class(subclass?: string): string | void {
    throw new Error('Method not implemented: sub_class');
  }

  /**
   * Return the full class name like "node.subclass" or "node"
   */
  class(): string {
    throw new Error('Method not implemented: class');
  }

  /**
   * Return the main class name like "node"
   */
  main_class(): string {
    throw new Error('Method not implemented: main_class');
  }
}
