import {Component, OnInit} from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  contractForm: FormGroup;

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)])
    });
  }

  addContract() {
    this.contractService.save(this.contractForm.value).subscribe(() => {
      alert('add success');
      this.router.navigateByUrl('/contract');
    });
  }
}
