import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ClassBasedInterceptor } from './class-based.interceptor';

describe('ClassBasedInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ClassBasedInterceptor,
          multi: true
        }
      ]
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const interceptor: ClassBasedInterceptor = TestBed.inject(ClassBasedInterceptor);
    expect(interceptor).toBeTruthy();
  });

  xit('should allow HTTP requests to pass through the interceptor', () => {
    const mockResponse = { success: true };

    http.get('/test-api').subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/test-api');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

});
