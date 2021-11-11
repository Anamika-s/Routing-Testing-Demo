import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpurposeComponent } from './testpurpose.component';

describe('This is a test suite for testing this component', () => {
  let component: TestpurposeComponent;
  let fixture: ComponentFixture<TestpurposeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpurposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it("Test Case No 1 ", () =>
    {
  expect("hello").toEqual("hello");
    });
   it("Checking Component Proeperty", ()=>
   {
     console.log(component);
expect(component.componentName).toBe("HelloWorld");
   });
   it('Testing Sum Method', ()=>
   {
     expect(component.Sum()).toBe(100);
   })
   it("This is to test h1  element", ()=>
   {
    const collection = fixture.nativeElement;
    expect(collection.querySelector(".user").textContent). toContain("user");
   });
  });
  
 

