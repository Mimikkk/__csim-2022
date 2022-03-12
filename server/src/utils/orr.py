from typing import TypeVar, Callable

T = TypeVar('T')
def orr(provider: Callable[[], T], fallback: T) -> T:
  try:
    return provider()
  except:
    return fallback
